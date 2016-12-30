import React from 'react';
import ReactMixin from 'react-mixin';
import { ReactMeteorData } from 'meteor/react-meteor-data';

import Avatar from 'material-ui/Avatar';
import { Table } from 'react-bootstrap';




Session.setDefault('selectedPractitioner', false);

export default class PractitionerTable extends React.Component {
  getMeteorData() {
    let data = {
      style: {
        opacity: Session.get('globalOpacity')
      },
      selected: [],
      practitioners: Practitioners.find().map(function(practitioner){
        let result = {
          _id: practitioner._id,
          name: '',
          telecomValue: '',
          telecomUse: '',
          qualificationId: '',
          qualificationStart: '',
          qualificationEnd: '',
          issuer: ''
        };

        if (practitioner.name && practitioner.name && practitioner.name.text ) {
          result.name = practitioner.name.text;
        }
        if (practitioner.telecom && practitioner.telecom[0] && practitioner.telecom[0].value ) {
          result.telecomValue = practitioner.telecom[0].value;
        }
        if (practitioner.telecom && practitioner.telecom[0] && practitioner.telecom[0].use ) {
          result.telecomUse = practitioner.telecom[0].use;
        }

        if (practitioner.qualification && practitioner.qualification[0] && practitioner.qualification[0].identifier && practitioner.qualification[0].identifier[0] && practitioner.qualification[0].identifier[0].value ) {
          result.qualificationId = practitioner.qualification[0].identifier[0].value;
        }
        if (practitioner.qualification && practitioner.qualification[0] && practitioner.qualification[0].identifier && practitioner.qualification[0].identifier[0] && practitioner.qualification[0].identifier[0].period && practitioner.qualification[0].identifier[0].period.start ) {
          result.qualificationStart = practitioner.qualification[0].identifier[0].period.start;
        }
        if (practitioner.qualification && practitioner.qualification[0] && practitioner.qualification[0].identifier && practitioner.qualification[0].identifier[0] && practitioner.qualification[0].identifier[0].period && practitioner.qualification[0].identifier[0].period.end) {
          result.qualificationEnd = practitioner.qualification[0].identifier[0].period.end;
        }
        if (practitioner.qualification && practitioner.qualification[0] && practitioner.qualification[0].issuer && practitioner.qualification[0].issuer.display ) {
          result.issuer = practitioner.qualification[0].issuer.display;
        }

        return result;
      })
    };

    console.log("PractitionerTable[data]", data);
    return data;
  }

  rowClick(id){
    Session.set('practitionerUpsert', false);
    Session.set('selectedPractitioner', id);
    Session.set('practitionerPageTabIndex', 2);
  }
  render () {
    let tableRows = [];
    for (var i = 0; i < this.data.practitioners.length; i++) {
      tableRows.push(
      <tr className='practitionerRow' key={i} style={{cursor: 'pointer'}} onClick={ this.rowClick.bind('this', this.data.practitioners[i]._id) }>
        <td className="name">{this.data.practitioners[i].name}</td>
        <td className="telecomValue">{this.data.practitioners[i].telecomValue}</td>
        <td className="telecomUse">{this.data.practitioners[i].telecomUse}</td>
        <td className="issuer">{this.data.practitioners[i].issuer}</td>
        <td className="qualificationId">{this.data.practitioners[i].qualificationId}</td>
        <td className="qualificationStart">{this.data.practitioners[i].qualificationStart}</td>
        <td className="qualificationEnd">{this.data.practitioners[i].qualificationEnd}</td>
        <td className="barcode">{this.data.practitioners[i]._id}</td>
      </tr>);
    }


    return(
      <Table id="practitionersTable" responses hover >
        <thead>
          <tr>
            <th className="name">name</th>
            <th className="telecomValue">telecom</th>
            <th className="telecomUse">use</th>
            <th className="issuer">issuer</th>
            <th className="qualificationId">identification</th>
            <th className="qualificationStart">start</th>
            <th className="qualificationEnd">end</th>
            <th className="barcode">_id</th>
          </tr>
        </thead>
        <tbody>
          { tableRows }
        </tbody>
      </Table>

    );
  }
}

ReactMixin(PractitionerTable.prototype, ReactMeteorData);
