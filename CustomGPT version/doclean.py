import re
from googletrans import Translator, LANGUAGES

def translate_comments(file_path):
    # Initialize Google Translate API
    translator = Translator()

    # Read the JavaScript file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Regular expression patterns for single-line and multi-line comments
    single_line_comment_pattern = r'//.*'
    multi_line_comment_pattern = r'/\*[\s\S]*?\*/'

    # Function to translate a comment
    def translate_comment(match):
        comment = match.group()
        try:
            # Detect if it's Spanish and translate to English
            if 'es' in translator.detect(comment).lang:
                return translator.translate(comment, src='es', dest='en').text
        except Exception as e:
            print(f"Error translating comment: {comment}")
            print(f"Exception: {e}")
        return comment

    # Translate single-line comments
    content = re.sub(single_line_comment_pattern, translate_comment, content)
    # Translate multi-line comments
    content = re.sub(multi_line_comment_pattern, translate_comment, content)

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# Example usage
translate_comments('python/Scraping/examples.js')
