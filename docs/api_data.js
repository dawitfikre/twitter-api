define({ "api": [
  {
    "type": "post",
    "url": "/users/create",
    "title": "Signup Client",
    "name": "CreateClientUser",
    "group": "User",
    "description": "<p>This Creates a client user belonging to a specific role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Unique password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>Client Company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Payload:",
          "content": "{\n \"email\": \"tony@gebeya.com\",\n \"password\": \"password\",\n \"role\": \"client\",\n \"first_name\": \"Tony\",\n \"last_name\": \"Mutai\",\n \"company\": \"Koncart\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>User Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>User Role ie <em>client</em>, <em>talent</em> etc</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>Last Login Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Login Timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Payload:",
          "content": "{\n \"_id\": \"5bc3640847e10cb60ce81044\",\n \"username\": \"tony@gebeya.com\",\n \"role\": \"client\",\n \"created_at\": \"2018-10-14T15:43:22.052Z\",\n \"updated_at\": \"2018-10-14T15:43:22.052Zs\",\n \"last_login\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/create",
    "title": "Signup Talent",
    "name": "CreateTalentUser",
    "group": "User",
    "version": "2.0.0",
    "description": "<p>This Creates a talent user belonging to a specific role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Unique password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>User Role</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>Client Company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Payload:",
          "content": "{\n \"email\": \"tony@gebeya.com\",\n \"password\": \"password\",\n \"role\": \"talent\",\n \"first_name\": \"Tony\",\n \"last_name\": \"Mutai\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>User Unique Id</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Email Address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "role",
            "description": "<p>User Role ie <em>client</em>, <em>talent</em> etc</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "created_at",
            "description": "<p>Last Login Timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Last Login Timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Payload:",
          "content": "{\n \"_id\": \"5bc3640847e10cb60ce81044\",\n \"username\": \"tony@gebeya.com\",\n \"role\": \"talent\",\n \"created_at\": \"2018-10-14T15:43:22.052Z\",\n \"updated_at\": \"2018-10-14T15:43:22.052Zs\",\n \"last_login\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
