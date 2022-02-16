  curl 'http://127.0.0.1:4741/review' \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "review": {
        "rating": "'"${RATING}"'",
        "content": "'"${CONTENT}"'",
        "doctorId": "'"${DOC_ID}"'",
        "owner": "'"${OWNER_ID}"'"
      }
    }'