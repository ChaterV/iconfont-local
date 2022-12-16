#!/bin/sh
function parse_json(){
    echo "${1//\"/}" | sed "s/.*$2:\([^,}]*\).*/\1/"
}
url=$(parse_json $1 "url")
referer=$(parse_json $3 "referer")
cookie=$(parse_json $2 "cookie")

curl -o iconfontTemp.json -s $url \
  -H 'authority: www.iconfont.cn' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'accept: application/json, text/javascript, */*; q=0.01' \
  -H 'x-requested-with: XMLHttpRequest' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H "referer: $referer" \
  -H 'accept-language: zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6' \
  -H "cookie: $cookie"

dir=$(cd $(dirname $0) && pwd )

node ${dir}/updateIconfont.js
