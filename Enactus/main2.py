import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

os.environ['PATH']+=r"C:/SeleniumDrivers"
driver=webdriver.Chrome()
driver.get('https://www.seleniumeasy.com/test/basic-first-form-demo.html')
driver.implicitly_wait(5)
try:
    nbtn = driver.find_element_by_class_name('at-cm-no-button')
    nbtn.click()
except:print('N')
s1=driver.find_element_by_id('sum1')
s2=driver.find_element_by_id('sum2')
s1.send_keys(Keys.NUMPAD4,Keys.NUMPAD3)
s2.send_keys(23)
cl=driver.find_element_by_css_selector('button[onclick="return total()"]')
#
cl.click()