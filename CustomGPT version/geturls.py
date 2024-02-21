import requests
from bs4 import BeautifulSoup
import csv

def fetch_and_parse(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raises an HTTPError if the HTTP request returned an unsuccessful status code
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup
    except requests.HTTPError as e:
        print(f"HTTP Error: {e}")
    except requests.RequestException as e:
        print(f"Error fetching the URL: {e}")
    return None

def extract_links(soup):
    links = []
    for tag in soup.find_all('a', class_='list-link'):
        link = tag.get('href', '')
        text = tag.get_text(strip=True)
        links.append((link, text))
    return links

def write_to_csv(links, filename='output.csv'):
    with open(filename, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['URL', 'Topic'])
        for link, text in links:
            writer.writerow([link, text])

def main(url):
    soup = fetch_and_parse(url)
    if soup:
        links = extract_links(soup)
        write_to_csv(links)
        print(f"CSV file has been created with {len(links)} entries.")

if __name__ == '__main__':
    url_to_scrape = input("Enter the URL to scrape: ")
    main(url_to_scrape)
