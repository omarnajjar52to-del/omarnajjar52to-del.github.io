FROM python:3.12-slim
WORKDIR /app
COPY server.py dashboard.html ./
ENV PORT=8080 DATABASE_PATH=/data/analytics.sqlite3
EXPOSE 8080
CMD ["python", "server.py"]
