import scrapy
from ..items import DangdangItem

class DangdangComputerbooksSpider(scrapy.Spider):
    name = "dangdang_computerbooks"
    allowed_domains = ["category.dangdang.com/cp01.54.00.00.00.00.html"]
    start_urls = ["http://category.dangdang.com/cp01.54.00.00.00.00.html"]
    
    def parse(self, response):
        # 书籍信息列表
        li_list = response.xpath("//ul[@id='component_59']/li")
   
        for item in li_list:
            book_item = DangdangItem()
            book_item['book_name'] = item.xpath("./p[@class='name']/a/text()").extract()
            book_item['price'] = (item.xpath("./p[@class='price']/*/text()")).extract()
            book_item['briefintro'] = item.xpath("./p[@class='detail']/text()").extract()
            book_item['press'] = item.xpath("./p[@class='search_book_author']/span/a/text()").extract()
            yield book_item
     
            