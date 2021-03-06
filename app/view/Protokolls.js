/*
 * File: app/view/Protokolls.js
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

Ext.define('hurricane.view.Protokolls', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.protokolls',

    requires: [
        'hurricane.view.ProtokollsViewModel',
        'hurricane.view.ProtokollsViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'protokolls',
    viewModel: {
        type: 'protokolls'
    },
    height: 250,
    shrinkWrap: 0,
    width: 400,
    layout: 'border',
    collapsed: false,
    title: 'My Panel',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            region: 'center',
            split: true,
            reference: 'list',
            resizable: false,
            title: '',
            forceFit: true,
            bind: {
                store: '{protokolls}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'ProtokollID',
                    text: 'Protokoll Id',
                    format: '00'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'EingangsDatum',
                    text: 'Eingangs Datum',
                    format: 'm/j/Y'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'PatientenNummer',
                    text: 'Patienten Nummer',
                    format: '00'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'AufnahmeZeit',
                    text: 'Aufnahme Zeit'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'AufnahmeID',
                    text: 'Aufnahme Id',
                    format: '00'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'AufnahmeKTW',
                    text: 'Aufnahme Ktw'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'AbgangZeit',
                    text: 'Abgang Zeit'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'AbgangID',
                    text: 'Abgang Id',
                    format: '00'
                }
            ],
            listeners: {
                select: 'select'
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'east',
            split: true,
            reference: 'display',
            width: 150,
            layout: 'card',
            bodyBorder: true,
            items: [
                {
                    xtype: 'panel',
                    reference: 'selectMessage',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '<h1>Please select a record</h1>'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    reference: 'details',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Protokoll Id',
                            bind: {
                                value: '{record.ProtokollID}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Eingangs Datum',
                            bind: {
                                value: '{record.EingangsDatum}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Patienten Nummer',
                            bind: {
                                value: '{record.PatientenNummer}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Aufnahme Zeit',
                            bind: {
                                value: '{record.AufnahmeZeit}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Aufnahme Id',
                            bind: {
                                value: '{record.AufnahmeID}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Aufnahme Ktw',
                            bind: {
                                value: '{record.AufnahmeKTW}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Abgang Zeit',
                            bind: {
                                value: '{record.AbgangZeit}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Abgang Id',
                            bind: {
                                value: '{record.AbgangID}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Abgang Uebergabe',
                            bind: {
                                value: '{record.AbgangUebergabe}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Abgang Ziel',
                            bind: {
                                value: '{record.AbgangZiel}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Diagnose Sonstiges',
                            bind: {
                                value: '{record.DiagnoseSonstiges}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Helfer Nr1',
                            bind: {
                                value: '{record.HelferNr1}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Helfer Nr2',
                            bind: {
                                value: '{record.HelferNr2}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'form',
                    reference: 'form',
                    bodyPadding: 10,
                    title: 'Edit Protokoll',
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Eingangs Datum',
                            name: 'EingangsDatum'
                        },
                        {
                            xtype: 'numberfield',
                            width: 180,
                            fieldLabel: 'Patienten Nummer',
                            name: 'PatientenNummer'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Aufnahme Zeit',
                            name: 'AufnahmeZeit'
                        },
                        {
                            xtype: 'displayfield',
                            width: 180,
                            fieldLabel: 'Aufnahme Id',
                            name: 'AufnahmeID'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Aufnahme Ktw',
                            name: 'AufnahmeKTW'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Abgang Zeit',
                            name: 'AbgangZeit'
                        },
                        {
                            xtype: 'displayfield',
                            width: 180,
                            fieldLabel: 'Abgang Id',
                            name: 'AbgangID'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Abgang Uebergabe',
                            name: 'AbgangUebergabe'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Abgang Ziel',
                            name: 'AbgangZiel'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Diagnose Sonstiges',
                            name: 'DiagnoseSonstiges'
                        },
                        {
                            xtype: 'numberfield',
                            width: 180,
                            fieldLabel: 'Helfer Nr1',
                            name: 'HelferNr1'
                        },
                        {
                            xtype: 'numberfield',
                            width: 180,
                            fieldLabel: 'Helfer Nr2',
                            name: 'HelferNr2'
                        },
                        {
                            xtype: 'container',
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
                                        click: 'save'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    itemId: 'cancelButton',
                                    margin: 5,
                                    text: 'Cancel',
                                    listeners: {
                                        click: 'cancelEdit'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'add'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'edit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Remove',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'remove'
                    }
                }
            ]
        }
    ]

});