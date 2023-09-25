FROM python:3.11.5-alpine3.18

COPY requirements.txt /service/requirements.txt
COPY ChiHuashki /service/ChiHuashki

WORKDIR /service
EXPOSE 80

RUN apk update && apk add --no-cache ffmpeg
RUN pip install -r requirements.txt
RUN adduser --disabled-password service-user


USER service-user