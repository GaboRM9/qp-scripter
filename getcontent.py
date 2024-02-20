import csv
import requests
from bs4 import BeautifulSoup

def read_urls_from_csv(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        reader = csv.reader(file)
        urls = [row[0] for row in reader if row]
    return urls

def save_all_content(urls, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        for url in urls:
            try:
                response = requests.get(url)
                soup = BeautifulSoup(response.text, 'html.parser')

                # Extract and clean text
                text = soup.get_text(separator='\n', strip=True)

                # Write URL and its content to the file
                file.write(f"URL: {url}\n")
                file.write(text)
                file.write("\n\n--- End of Content ---\n\n")
            except Exception as e:
                print(f"Error fetching {url}: {e}")

# Path to your CSV file containing URLs
csv_file_path = 'urls.csv'

# Read URLs from CSV
urls = read_urls_from_csv(csv_file_path)

# Save all content to a single file
filename = 'all_content.txt'
save_all_content(urls, filename)
