FROM arm64v8/node:lts-bullseye

RUN apt-get update && apt-get install -y tini

ARG enable_mecab=1

RUN if [ $enable_mecab -ne 0 ]; then apt-get update \
  && apt-get install mecab libmecab-dev mecab-ipadic-utf8 make curl xz-utils file sudo libsdl-pango-dev --no-install-recommends -y \
  && apt-get clean \
  && rm -rf /var/lib/apt-get/lists/* \
  && cd /opt \
  && git clone --depth 1 https://github.com/neologd/mecab-ipadic-neologd.git \
  && cd /opt/mecab-ipadic-neologd \
  && sed -i 's/ORG_DIC_URL_LIST\[0\]=.*/ORG_DIC_URL_LIST[0]="https:\/\/zerglinggo.net\/mecab-ipadic\/mecab-ipadic-2.7.0-20070801.tar.gz"/g' ./libexec/make-mecab-ipadic-neologd.sh \
  && ./bin/install-mecab-ipadic-neologd -n -y \
  && rm -rf /opt/mecab-ipadic-neologd \
  && echo "dicdir = /usr/lib/x86_64-linux-gnu/mecab/dic/mecab-ipadic-neologd/" > /etc/mecabrc \
  && apt-get purge git curl xz-utils file -y; fi

COPY . /ai

WORKDIR /ai
RUN npm install && npm run build

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD npm start
