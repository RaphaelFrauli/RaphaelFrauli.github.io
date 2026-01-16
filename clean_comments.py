import re
import sys

def remove_comments(content):
    # Remove HTML comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    
    # Remove CSS comments in <style> tags
    def remove_css_comments(match):
        css = match.group(1)
        css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
        # Also remove potential // comments if any (though not standard CSS)
        css = re.sub(r'^\s*//.*$', '', css, flags=re.MULTILINE)
        return f'<style>{css}</style>'
    
    content = re.sub(r'<style>(.*?)</style>', remove_css_comments, content, flags=re.DOTALL)
    
    # Remove JS comments in <script> tags
    def remove_js_comments(match):
        js = match.group(1)
        # Multi-line
        js = re.sub(r'/\*.*?\*/', '', js, flags=re.DOTALL)
        # Single-line (be careful with URLs, but // at start of line or after space/semicolon)
        js = re.sub(r'(^|\s|;)//.*$', r'\1', js, flags=re.MULTILINE)
        return f'<script>{js}</script>'
    
    content = re.sub(r'<script>(.*?)</script>', remove_js_comments, content, flags=re.DOTALL)
    
    # Remove empty lines that were just comments
    content = re.sub(r'\n\s*\n', '\n', content)
    
    return content

with open('z:/Documents - Raphaël/WEB-CV/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

cleaned = remove_comments(text)

with open('z:/Documents - Raphaël/WEB-CV/index.html', 'w', encoding='utf-8') as f:
    f.write(cleaned)
