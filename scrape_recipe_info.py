import pandas as pd
import requests
from bs4 import BeautifulSoup 
import time

def recipeinfodict(allrecipes_link):
    ''' Returns a dictionary of the recipe info found on a given allrecipes recipe webpage.'''

    source = requests.get(allrecipes_link).text
    soup = BeautifulSoup(source, 'lxml')

    # Getting the name of recipe

    name_tag = soup.title
    name = name_tag.text.split('|')[0].strip()
    
    # Getting the description of recipe

    div_tag = soup.find('div', class_='recipe-summary elementFont__dek--within')
    description = div_tag.find('p', class_='margin-0-auto').text.strip()

    # Getting the prep, cook and total times and serving(s) of recipe

    info_section_tag = soup.find('section', class_='recipe-meta-container two-subcol-content clearfix recipeMeta')

    prep = None
    cook = None
    additional = None
    total = None
    servings = None
    yield_ = None

    for info_tag in info_section_tag.find_all('div', class_='recipe-meta-item'):
        info_category = info_tag.find('div', class_='recipe-meta-item-header elementFont__subtitle--bold elementFont__transformCapitalize').text
        info_data = info_tag.find('div', class_='recipe-meta-item-body elementFont__subtitle').text.strip()

        if info_category == 'prep:':
            prep = info_data
        if info_category == 'cook:':
            cook = info_data
        if info_category == 'additional:':
            additional = info_data
        if info_category == 'total:':
            total = info_data
        if info_category == 'Servings:':
            servings = info_data
        if info_category == 'Yield:':
            yield_ = info_data

    # Getting the ingredient list for recipe

    ingredient_tag = soup.find('section', class_='component recipe-ingredients recipeIngredients container interactive')

    ingredient_list = list()

    for item in ingredient_tag.find_all('span', class_='ingredients-item-name elementFont__body'):
        formatted_ingredient = item.text.strip()
        ingredient_list.append(formatted_ingredient)
    
    ingredients = "; ".join(ingredient_list)

    # Getting the instructions for recipe

    instruction_tag = soup.find('ul', class_='instructions-section')

    instruction_list = list()

    for instruction in instruction_tag.find_all('p'):
        instruction_list.append(instruction.text)

    instructions = " ".join(instruction_list)

    # Getting the nutrition facts per serving of recipe

    nutrition_section_tag = soup.find('div', class_='recipeNutritionSectionBlock')

    nutrition_tag = nutrition_section_tag.find('div', class_='section-body')

    nutrition = nutrition_tag.text.split('Full')[0].strip()# Getting the prep, cook and total times and serving(s) of recipe

    # Getting the images' urls of recipe

    list_images_url = []

    aside_tag = soup.find('aside', class_='recipe-tout-image recipe-info-items-3')
    if aside_tag != None:
        div_tag = aside_tag.find('div', class_='component lazy-image lazy-image-udf aspect_1x1 cache-only align-default')
        if div_tag == None:
            div_tag = aside_tag.find('div', class_='component lazy-image lazy-image-udf aspect_3x2 cache-only align-default')
        if div_tag != None:    
            list_images_url.append(div_tag['data-src'])


    image_filmstrip = soup.find('div', class_='component image-filmstrip')

    for image_slide in image_filmstrip.find_all('div', class_='image-slide')[1:]:
        a_tag = image_slide.find('a', class_='ugc-photos-link')

        div_tag = a_tag.find('div', class_='component lazy-image lazy-image-udf aspect_3x2')
        if div_tag == None:
            div_tag = a_tag.find('div', class_='component lazy-image lazy-image-udf aspect_3x4')
        if div_tag == None:
            div_tag = a_tag.find('div', class_='component lazy-image lazy-image-udf aspect_1x1')

        if div_tag != None:
            list_images_url.append(div_tag['data-src'])

    if len(list_images_url) > 1:
        images_url = '; '.join(list_images_url)
    else:
        images_url = list_images_url[0]

    # Combining all of the info into a dict

    recipe_info = {'name': name, 'description': description, 'prep': prep, 'cook': cook, 'additional': additional, 'total': total, 'servings': servings, 'yield': yield_, 'ingredients': ingredients, 'instructions': instructions, 'nutrition': nutrition, 'images_url': images_url}
    
    return recipe_info



headers = ['recipe_link', 'name', 'description', 'prep', 'cook', 'additional', 'total', 'servings', 'yield', 'ingredients', 'instructions', 'nutrition', 'images_url']

df = pd.read_csv('project_github/recipe_links.csv', names=headers)

# Inputting recipe info into the DataFrame
for index in range(df.shape[0]):
    df.loc[index, 'name'] = recipeinfodict(df.loc[index, 'recipe_link'])['name']
    df.loc[index, 'description'] = recipeinfodict(df.loc[index, 'recipe_link'])['description']
    df.loc[index, 'prep'] = recipeinfodict(df.loc[index, 'recipe_link'])['prep']
    df.loc[index, 'cook'] = recipeinfodict(df.loc[index, 'recipe_link'])['cook']
    df.loc[index, 'additional'] = recipeinfodict(df.loc[index, 'recipe_link'])['additional']
    df.loc[index, 'total'] = recipeinfodict(df.loc[index, 'recipe_link'])['total']
    df.loc[index, 'servings'] = recipeinfodict(df.loc[index, 'recipe_link'])['servings']
    df.loc[index, 'yield'] = recipeinfodict(df.loc[index, 'recipe_link'])['yield']
    df.loc[index, 'ingredients'] = recipeinfodict(df.loc[index, 'recipe_link'])['ingredients']
    df.loc[index, 'instructions'] = recipeinfodict(df.loc[index, 'recipe_link'])['instructions']
    df.loc[index, 'nutrition'] = recipeinfodict(df.loc[index, 'recipe_link'])['nutrition']
    df.loc[index, 'images_url'] = recipeinfodict(df.loc[index, 'recipe_link'])['images_url']
    time.sleep(1)

df.to_csv('recipe_database.csv', index=False)
