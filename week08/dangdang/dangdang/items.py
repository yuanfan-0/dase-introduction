# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DangdangItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    
    book_name = scrapy.Field()  #书名
    price = scrapy.Field()  #价格
    briefintro = scrapy.Field()  #简介
    press = scrapy.Field()  #出版社
    # pass
