ConformanceStatement = {
  "resourceType": "Conformance",
  "url": "http://fhir-server.meteorapp.com/fhir",
  "name": "Sprint 2",
  "version": "0.2",
  "status": "draft",
  "experimental": "true",
  "publisher": "Pentasyllabic Studios",
  "kind": "capability",
  "date": new Date(),
  "contact": [
    {
      "telecom": [
        {
          "system": "other",
          "value": "http://github.com/clinical-meteor/meteor-on-fhir"
        }
      ]
    }
  ],
  "software": {
    "version" : "clinical:METEOR@1.4.3.2-rc16",
    "name" : "Meteor FHIR Repository",
    "releaseDate" : "2017-01-01"
  },
  "fhirVersion": "DTSU2",
  "acceptUnknown": "no",
  "format": [
    "json"
  ],
  "rest": [{
      "mode": "server",
      "security": {
        "service": [{
          "text": "OAuth"
        }],
        "extension": [{
          "url": "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris",
          "extension": [{
            "url": "token",
            "valueUri": Meteor.absoluteUrl() + "oauth/token"
          }, {
            "url": "authorize",
            "valueUri": Meteor.absoluteUrl() + "oauth"
          }]
        }]
      },
      "resource": [{
        "type": "Patient",
        "interaction": [{
          "code": "read"
        }, {
          "code": "search-type",
          "documentation": "When a client searches patients with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
        }]
        // "searchParam": [
        //     {
        //       "name": "_id",
        //       "type": "token",
        //       "documentation": "_id parameter always supported."
        //     },
        //     {
        //       "name": "identifier",
        //       "type": "token"
        //     },
        //     {
        //       "name": "name",
        //       "type": "token"
        //     },
        //     {
        //       "name": "family",
        //       "type": "token"
        //     },
        //     {
        //       "name": "given",
        //       "type": "token"
        //     },
        //     {
        //       "name": "gender",
        //       "type": "token"
        //     },
        //     {
        //       "name": "birthday",
        //       "type": "token"
        //     },
        //
        //   ]
      }, {
        "type": "Practitioner",
        "interaction": [{
          "code": "read"
        }, {
          "code": "search-type",
          "documentation": "When a client searches practitioners with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
        }]
        // "searchParam": [
        //     {
        //       "name": "_id",
        //       "type": "token",
        //       "documentation": "_id parameter always supported."
        //     },
        //     {
        //       "name": "identifier",
        //       "type": "token"
        //     },
        //     {
        //       "name": "name",
        //       "type": "token"
        //     },
        //     {
        //       "name": "family",
        //       "type": "token"
        //     },
        //     {
        //       "name": "given",
        //       "type": "token"
        //     },
        //     {
        //       "name": "gender",
        //       "type": "token"
        //     },
        //     {
        //       "name": "birthday",
        //       "type": "token"
        //     },
        //
        //   ]
      }, {
        "type": "Observations",
        "interaction": [{
          "code": "read"
        }, {
          "code": "search-type",
          "documentation": "When a client searches practitioners with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
        }]
        // "searchParam": [
        //     {
        //       "name": "_id",
        //       "type": "token",
        //       "documentation": "_id parameter always supported."
        //     },
        //     {
        //       "name": "identifier",
        //       "type": "token"
        //     },
        //     {
        //       "name": "name",
        //       "type": "token"
        //     },
        //     {
        //       "name": "family",
        //       "type": "token"
        //     },
        //     {
        //       "name": "given",
        //       "type": "token"
        //     },
        //     {
        //       "name": "gender",
        //       "type": "token"
        //     },
        //     {
        //       "name": "birthday",
        //       "type": "token"
        //     },
        //
        //   ]
      }, {
        "type": "Medications",
        "interaction": [{
          "code": "read"
        }, {
          "code": "search-type",
          "documentation": "When a client searches practitioners with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
        }]
        // "searchParam": [
        //     {
        //       "name": "_id",
        //       "type": "token",
        //       "documentation": "_id parameter always supported."
        //     },
        //     {
        //       "name": "identifier",
        //       "type": "token"
        //     },
        //     {
        //       "name": "name",
        //       "type": "token"
        //     },
        //     {
        //       "name": "family",
        //       "type": "token"
        //     },
        //     {
        //       "name": "given",
        //       "type": "token"
        //     },
        //     {
        //       "name": "gender",
        //       "type": "token"
        //     },
        //     {
        //       "name": "birthday",
        //       "type": "token"
        //     },
        //
        //   ]
      }, {
        "type": "Devices",
        "interaction": [{
          "code": "read"
        }, {
          "code": "search-type",
          "documentation": "When a client searches practitioners with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required"
        }]
        // "searchParam": [
        //     {
        //       "name": "_id",
        //       "type": "token",
        //       "documentation": "_id parameter always supported."
        //     },
        //     {
        //       "name": "identifier",
        //       "type": "token"
        //     },
        //     {
        //       "name": "name",
        //       "type": "token"
        //     },
        //     {
        //       "name": "family",
        //       "type": "token"
        //     },
        //     {
        //       "name": "given",
        //       "type": "token"
        //     },
        //     {
        //       "name": "gender",
        //       "type": "token"
        //     },
        //     {
        //       "name": "birthday",
        //       "type": "token"
        //     },
        //
        //   ]
      }]
  }]
};


JsonRoutes.add("get", "fhir/metadata", function (req, res, next) {
  console.log('GET /fhir/metadata');

  JsonRoutes.sendResult(res, {
    code: 200,
    data: ConformanceStatement
  });
});
