from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation=').text

soup= BeautifulSoup(html_text, 'lxml')
jobs1 = soup.find_all('li', class_='clearfix job-bx wht-shd-bx')
for jobs in jobs1:
    job_comp = jobs.find('h3', class_='joblist-comp-name').text.replace(' ','').strip(' ')
    skills = jobs.find('span',class_='srp-skills').text.replace(' ','').strip(' ')
    publish = jobs.find('span',class_='sim-posted').span.text

    print(f'''
    Company Name: {job_comp.strip()}
    Skills: {skills.strip()}
    Pubished Date: {publish.strip()}
    ''')
