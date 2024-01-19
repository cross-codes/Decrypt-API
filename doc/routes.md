<div align="center">
<h1>🔐 Decrypt-API </h1>

An API for the coding club's Decrypt challenge

</div>

---

## Possible error responses

|Error serial| Status code | Response Body (Plain JSON) |
|:----------:|:-----------:|:-------------:|
|(E1)        |400          |{ "error": "Bad request" }|
|(E2)        |500          |{ "error": "Internal server error" }|

## Routes

Henceforth the term `{{url}}` will refer to the URL on which the API is hosted.

Eg: In the case of a local deployment, `{{url}}` will be `https:/localhost:3000`

---
(1) **`GET`** `{{url}}/api/problem1`

**Expected Request Body**: Plain JSON ; Must have an accessible `body.input` field:

```JSON
{
    "...",
    "body": {
        "...",
        "input": "<Float>",
        "..."
    },
    "..."
}
```

Example request:

```bash
 curl -X GET \
       -H 'Content-Type: application/json' \
       -d '{"input": <Float>}' \
       {{url}}/api/problem1
```

**Successful response**: Accompanied by a 200 (OK) status code:

```JSON
{
    "output": "..."
}
```

**Potential errors**:

Type `E1` if the request is malformed or the input is not
an (implicitly convertible) floating point number.

Type `E2` if the server is down, or the error is not an `instanceOf` error.
