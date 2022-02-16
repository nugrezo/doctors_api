curl "http://127.0.0.1:4741/review/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--data '{
  "review": {
    "rating": "'"${RATING}"'",
    "content": "'"${CONTENT}"'"
  }
}'

# curl "http://localhost:4741/reviews/${ID}" \
#   --include \
#   --request PATCH \
#   --header "Content-Type: application/json" \
#   --data '{
#     "review": {
#       "title": "'"${TITLE}"'",
#       "content": "'"${CONTENT}"'",
#       "restaurantId": "'"${REST_ID}"'"
#     }
#   }'