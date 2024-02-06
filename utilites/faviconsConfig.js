import bangladeshtoday from ''

const favicons =
{
  "thebangladeshtoday": "",
  "tbsnews": "",
  "observerbd": "",
  "daily-sun": "",
  "dhakatribune": "",
  "newagebd": "",
  "newnation": "",
  "thedailystar": "",
  "thefinancialexpress": "",
  "ajkerpatrika": "",
  "alokitobangladesh": "",
  "dainikamadershomoy": "",
  "amarbarta": "",
  "bd-pratidin": "",
  "bhorerkagoj": "",
  "bonikbarta": "",
  "dhakatimes24": "",
  "deshrupantor": "",
  "dailyinqilab": "",
  "ittefaq": "",
  "jaijaidinbd": "",
  "dainikazadi": "",
  "dailyjanakantha": "",
  "jugantor": "",
  "kalbela": "",
  "kalerkantho": "",
  "mzamin": "",
  "manobkantha": "",
  "dailynayadiganta": "",
  "prothomalo": "",
  "protidinersangbad": "",
  "samakal": "",
  "dailysangram": "",
  "shomoyeralo": "",
  "sangbad": "",
  "bbc": "",
  "banglanews24": "",
  "jagonews24": "",
  "banglatribune": "",
  "dhakapost": ""
}

exports.getFavicon = function(url){
  const hostname = new URL(url)['hostname']
  const hostnameArr = hostname.split(".")
  const name = hostnameArr[0] === 'www' ? hostnameArr[1] : hostnameArr[0]

  const favicon = favicons[name]

  return favicon;
}
