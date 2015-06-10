require 'httparty'

class Feed
  include ActiveModel::Model
  include HTTParty
  @notices = []
  @mashable = []
  @reddit = []
  @digg = []

  mashable = HTTParty.get('http://mashable.com/stories.json')
  mashable["new"].each do |notice|
    mashable = {}
    mashable["title"] = notice['title']
    mashable["author"] = notice['author']
    mashable["date"] = notice['post_date']
    mashable["url"] = notice['short_url']
    mashable["image"] = notice['image']
    mashable["website"] = "Mashable"
    @mashable.push(mashable)
    @notices.push(mashable)
  end

  reddit = HTTParty.get('http://www.reddit.com/.json')
  reddit["data"]["children"].each do |notice|
  	reddit = {}
    reddit["title"] = notice['data']['title']
    reddit["author"] = notice['data']['author']
    reddit["date"] = Time.at(notice['data']['created'])
    reddit["url"] = notice['data']['url']
    reddit["image"] = notice['data']['thumbnail']
    reddit["website"] = "Reddit"
    @reddit.push(reddit)
    @notices.push(reddit)
  end

  digg = HTTParty.get('http://digg.com/api/news/popular.json')
  digg["data"]["feed"].each do |notice|
  	digg = {}
  	digg["title"] = notice['content']['title']
  	digg["author"] = notice['content']['author']
  	digg["date"] = Time.at(notice['date'])
  	digg["url"] = notice['content']['url']
  	digg["image"] = notice['content']['media']['images'][0]['url']
  	digg["website"] = "Digg"
  	@digg.push(digg)  	
  	@notices.push(digg)
  end

  def self.notices
  	@notices
  end

  def self.mashable
  	@mashable
  end

  def self.reddit
  	@reddit
  end

  def self.digg
  	@digg
  end

end