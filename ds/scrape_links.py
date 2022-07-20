import requests
from bs4 import BeautifulSoup 
import pandas as pd
import time

def allrecipeslinksdf(allrecipes_link):
    ''' Returns a DataFrame of the recipe links found on a given allrecipes webpage.'''
    
    link_df = pd.DataFrame(columns = ['recipe_link'])
    
    source = requests.get(allrecipes_link).text
    soup = BeautifulSoup(source, 'lxml')
    
    # Adding all links in webpage's cards to dataframe
    
    for recipe_card in soup.find_all('div', class_='card__detailsContainer-left'):
        link = recipe_card.find('a', class_='card__titleLink manual-link-behavior elementFont__titleLink margin-8-bottom')['href']
        link_df = link_df.append({'recipe_link': link}, ignore_index=True)
    
    # Filtering for recipe links only
    
    filt = link_df['recipe_link'].str.contains('https://www.allrecipes.com/recipe/', na=False)
    link_df = link_df.loc[filt, 'recipe_link']
    link_df = pd.DataFrame(link_df)
    
    return link_df


# Links of allrecipes sections of interest.
url_prefix = 'https://www.allrecipes.com/recipes/'

sections_urls = ['78/breakfast-and-brunch/', 
            '201/meat-and-poultry/chicken/', 
            '200/meat-and-poultry/beef/', 
            '205/meat-and-poultry/pork/', 
            '17561/lunch/', 
            '17562/dinner/', 
            '76/appetizers-and-snacks/', 
            '156/bread/', 
            '79/desserts/', 
            '77/drinks/', 
            '80/main-dish/', 
            '96/salad/', 
            '81/side-dish/', 
            '94/soups-stews-and-chili/', 
            '1642/everyday-cooking/', 
            '84/healthy-recipes/', 
            '85/holidays-and-events/', 
            '86/world-cuisine/']

# Creating a DataFrame for storing all recipe urls of interest.
df = pd.DataFrame()

for section in sections_urls:
    url = url_prefix + section
    df = df.append(allrecipeslinksdf(url), ignore_index=True)
    time.sleep(3)


df.drop_duplicates(inplace=True)

# Saving dataframe to a csv file
df.to_csv('recipe_links.csv', header=False, index=False)