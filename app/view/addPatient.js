/*
 * File: app/view/addPatient.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('hurricane.view.addPatient', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.addpatient',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Display',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.VBox',
        'hurricane.view.EditPatientViewController1',
        'hurricane.view.EditPatientViewModel1'
    ],

    controller: 'addpatient',
    viewModel: {
        type: 'addpatient'
    },
    modal: true,
    id: 'addPatient',
    // width: 250,
    frameHeader: false,
    header: false,
    manageHeight: false,
    title: 'Patienten Anzeigen',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            reference: 'form',
            id: 'frmAddPatient',
            itemId: 'myform',
            bodyPadding: '10 10 10 25',
            // title: 'Patientendaten',
            // titleAlign: 'center',
            items: [
                {
                    xtype: 'container',
                    // layout: 'column',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [
                        {
                            margin: '0 10px 0 0 ',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    hidden: true,
                                    fieldLabel: 'Patient Id',
                                    name: 'patientID',
                                    submitValue: true
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'inpName',
                                    width: 200,
                                    fieldLabel: 'Name',
                                    hideLabel: true,
                                    name: 'Name',
                                    readOnly: false,
                                    allowBlank: false,
                                    emptyText: 'Name'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Vorname',
                                    hideLabel: true,
                                    name: 'Vorname',
                                    readOnly: false,
                                    allowBlank: false,
                                    emptyText: 'Vorname'
                                },
                                {
                                    xtype: 'datefield',
                                    width: 200,
                                    fieldLabel: 'Geburtsdatum',
                                    hideLabel: true,
                                    name: 'Geburtsdatum',
                                    readOnly: false,
                                    emptyText: 'Geburtsdatum',
                                    format: 'd.m.Y',
                                    submitFormat: 'Y-m-d'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Strasse',
                                    hideLabel: true,
                                    name: 'Strasse',
                                    readOnly: false,
                                    emptyText: 'Strasse'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Plz',
                                    hideLabel: true,
                                    name: 'PLZ',
                                    readOnly: false,
                                    emptyText: 'Plz'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Ort',
                                    hideLabel: true,
                                    name: 'Ort',
                                    readOnly: false,
                                    emptyText: 'Ort'
                                },
                                {
                                    xtype: 'combobox',
                                    id: 'frmFldGeschlecht1',
                                    width: 200,
                                    fieldLabel: 'Geschlecht',
                                    hideLabel: true,
                                    name: 'GeschlechtID',
                                    readOnly: false,
                                    allowBlank: false,
                                    emptyText: 'Geschlecht',
                                    displayField: 'Beschreibung',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: 'Geschlecht',
                                    valueField: 'GeschlechtID'
                                }
                            ]
                        },
                        {
                            items: [
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    id: 'fldProtokollID',
                                    width: 200,
                                    fieldLabel: 'Protokoll Id',
                                    hideLabel: true,
                                    name: 'ProtokollID',
                                    emptyText: 'Protokoll Nummer'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    hidden: true,
                                    fieldLabel: 'Label',
                                    name: 'PatientenID'
                                },
                                {
                                    xtype: 'datefield',
                                    width: 200,
                                    fieldLabel: 'Eingangs Datum',
                                    hideLabel: true,
                                    name: 'EingangsDatum',
                                    allowBlank: false,
                                    emptyText: 'Eingangs-Datum',
                                    altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|dmy|dmY',
                                    format: 'd.m.Y',
                                    submitFormat: 'Y-m-d'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Patienten Nummer',
                                    hideLabel: true,
                                    name: 'PatientenNummer',
                                    inputType: 'number',
                                    allowBlank: false,
                                    emptyText: 'Protokoll Nummer'
                                },
                                {
                                    xtype: 'timefield',
                                    width: 200,
                                    fieldLabel: 'Aufnahme Zeit',
                                    hideLabel: true,
                                    name: 'AufnahmeZeit',
                                    emptyText: 'Aufnahme-Zeit',
                                    format: 'H:i',
                                    submitFormat: 'H:i'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 200,
                                    fieldLabel: 'Aufnahme Id',
                                    hideLabel: true,
                                    name: 'AufnahmeID',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    emptyText: 'Aufnahme-Ort',
                                    displayField: 'Beschreibung',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: 'Aufnahme',
                                    valueField: 'AufnahmeID',
                                    listeners: {
                                        change: {
                                            fn: 'onComboboxChange2',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    padding: '0 0 0 10',
                                    width: 190,
                                    fieldLabel: 'Aufnahme Ktw',
                                    hideLabel: true,
                                    name: 'AufnahmeKTW',
                                    emptyText: 'KTW Nummer'
                                },
                                {
                                    xtype: 'timefield',
                                    width: 200,
                                    fieldLabel: 'Abgang Zeit',
                                    hideLabel: true,
                                    name: 'AbgangZeit',
                                    emptyText: 'Abgangs-Zeit',
                                    format: 'H:i',
                                    submitFormat: 'H:i'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 200,
                                    fieldLabel: 'Abgang Id',
                                    hideLabel: true,
                                    name: 'AbgangID',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    emptyText: 'Abgang',
                                    displayField: 'Beschreibung',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: 'Abgang',
                                    valueField: 'AbgangID',
                                    listeners: {
                                        change: {
                                            fn: 'onComboboxChange',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    padding: '0 0 0 10',
                                    width: 190,
                                    fieldLabel: 'Uebergabe',
                                    hideLabel: true,
                                    name: 'AbgangUebergabe',
                                    emptyText: 'Uebergabe'
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    padding: '0 0 0 10',
                                    width: 190,
                                    fieldLabel: 'Abgang Ziel',
                                    hideLabel: true,
                                    name: 'AbgangZiel',
                                    emptyText: 'Ziel'
                                },
                                {
                                    xtype: 'combobox',
                                    width: 200,
                                    fieldLabel: 'Diagnose Id',
                                    hideLabel: true,
                                    name: 'DiagnoseID',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false,
                                    emptyText: 'Diagnose',
                                    displayField: 'Stichwort',
                                    forceSelection: true,
                                    queryMode: 'local',
                                    store: 'Diagnose',
                                    valueField: 'DiagnoseID',
                                    listeners: {
                                        change: {
                                            fn: 'onComboboxChange1',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'textfield',
                                    hidden: true,
                                    padding: '0 0 0 10',
                                    width: 190,
                                    fieldLabel: 'Diagnose Sonstiges',
                                    hideLabel: true,
                                    name: 'DiagnoseSonstiges',
                                    emptyText: 'Sonstiges'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Helfer Nr1',
                                    hideLabel: true,
                                    name: 'HelferNr1',
                                    inputType: 'number',
                                    allowBlank: false,
                                    emptyText: 'Helfer Nummer 1'
                                },
                                {
                                    xtype: 'textfield',
                                    width: 200,
                                    fieldLabel: 'Helfer Nr2',
                                    hideLabel: true,
                                    name: 'HelferNr2',
                                    inputType: 'number',
                                    emptyText: 'Helfer Nummer 2'
                                }
                            ]
                        },


                        {
                            xtype: 'container',
                            hidden: true,
                            padding: 10,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    formBind: true,
                                    itemId: 'saveButton',
                                    margin: 5,
                                    text: 'Save',
                                    listeners: {
                                        click: {
                                            fn: 'save1',
                                            scope: 'controller'
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    itemId: 'cancelButton',
                                    margin: 5,
                                    text: 'Cancel',
                                    listeners: {
                                        click: {
                                            fn: 'cancelEdit1',
                                            scope: 'controller'
                                        }
                                    }
                                }
                            ]

                        }
                    ]
                },

                {
                    xtype: 'container',
                    hidden: true,
                    padding: 10,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            formBind: true,
                            itemId: 'saveButton',
                            margin: 5,
                            text: 'Speichern',
                            listeners: {
                                click: {
                                    fn: 'onSave',
                                    scope: 'controller'
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            itemId: 'cancelButton',
                            margin: 5,
                            text: 'Abbrechen',
                            listeners: {
                                click: {
                                    fn: 'onCancel',
                                    scope: 'controller'
                                }
                            }
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: 'onFrmEditPatient1AfterRender'
            }
        }
    ],
    listeners: {
        afterrender: 'onWindowAfterRender'
    }
    ,

    onFrmEditPatient1AfterRender: function (component, eOpts) {

    }
    ,

    onWindowAfterRender: function (component, eOpts) {
        var form = this.getReferences().form.getForm();
        var newRecord = Ext.create('hurricane.model.Patient');
        //
        form.reset();
        //
        form.loadRecord(newRecord);
    }

})
;