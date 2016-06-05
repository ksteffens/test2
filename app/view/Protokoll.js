/*
 * File: app/view/Protokoll.js
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

Ext.define('hurricane.view.Protokoll', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.protokoll',

    requires: [
        'hurricane.view.ProtokollViewModel',
        'hurricane.view.ProtokollViewController',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.Time',
        'Ext.button.Button'
    ],

    controller: 'protokoll',
    viewModel: {
        type: 'protokoll'
    },
    shrinkWrap: 0,
    width: 250,
    frameHeader: false,
    header: false,
    manageHeight: false,
    defaultListenerScope: true,

    items: [
        {
            xtype: 'form',
            reference: 'form',
            id: 'frmInputProtokoll',
            itemId: 'myform3',
            width: 250,
            bodyPadding: '10 10 10 25',
            manageHeight: false,
            title: 'Protokolldaten',
            titleAlign: 'center',
            listeners: {
                afterrender: 'onFormAfterRender'
            },
            items: [
                {
                    xtype: 'textfield',
                    hidden: true,
                    width: 200,
                    fieldLabel: 'Protokoll Id',
                    hideLabel: true,
                    name: 'ProtokollID',
                    emptyText: 'Protokoll Nummer'
                },
                {
                    xtype: 'datefield',
                    width: 200,
                    fieldLabel: 'Eingangs Datum',
                    hideLabel: true,
                    name: 'EingangsDatum',
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
                    emptyText: 'Patienten Nummer'
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
        }
    ],

    onFormAfterRender: function(component, eOpts) {
        var form         = this.getReferences().form.getForm();
        var newRecord = Ext.create('hurricane.model.Protokoll');

        // Clear form
        form.reset();

        // Set record
        form.loadRecord(newRecord);
    }

});