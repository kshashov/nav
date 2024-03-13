import { gettext } from 'i18n'

AppSettingsPage({
    // 1. Define state
    state: {
        testKey: null,
        maps: [],
        props: {}
    },
    build(props) {
        this.setState(props)

        const addBtn = View(
            {
                style: {
                    fontSize: '12px',
                    lineHeight: '30px',
                    borderRadius: '30px',
                    background: '#409EFF',
                    color: 'white',
                    textAlign: 'center',
                    padding: '0 15px',
                    width: '30%'
                }
            },
            [
                TextInput({
                    label: gettext('Add Map'),
                    onChange: (val) => {
                        this.addMap(val)
                    }
                })
            ]
        )

        const contentItems = []

        this.state.maps.forEach((item, index) => {
            contentItems.push(
                View(
                    {
                        style: {
                            borderBottom: '1px solid #eaeaea',
                            padding: '6px 0',
                            marginBottom: '6px',
                            display: 'flex',
                            flexDirection: 'row'
                        }
                    },
                    [
                        View(
                            {
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justfyContent: 'center',
                                    alignItems: 'center'
                                }
                            },
                            [
                                TextInput({
                                    label: '',
                                    bold: true,
                                    value: item,
                                    subStyle: {
                                        color: '#333',
                                        fontSize: '14px'
                                    },
                                    maxLength: 200,
                                    onChange: (val) => {
                                        if (val.length > 0 && val.length <= 200) {
                                            this.editMap(val, index)
                                        } else {
                                            console.log("todoList can't be empty or too long!")
                                        }
                                    }
                                })
                            ]
                        ),
                        Button({
                            label: gettext('init'),
                            style: {
                                fontSize: '12px',
                                borderRadius: '30px',
                                background: '#D85E33',
                                color: 'white',
                                marginRight: '10px'
                            },
                            onClick: () => {
                                
                            }
                        }),
                        Button({
                            label: gettext('delete'),
                            style: {
                                fontSize: '12px',
                                borderRadius: '30px',
                                background: '#D85E33',
                                color: 'white'
                            },
                            onClick: () => {
                                this.deleteMap(index)
                            }
                        })
                    ]
                )
            )
        })

        // 4. Return Render Function
        return View({
            style: {
                padding: '12px 20px'
            }
        },
            [
                addBtn,
                contentItems.length > 0 &&
                View(
                    {
                        style: {
                            marginTop: '12px',
                            padding: '10px',
                            border: '1px solid #eaeaea',
                            borderRadius: '6px',
                            backgroundColor: 'white'
                        }
                    },
                    [...contentItems]
                ),
                Modal({
                    visible: true
                }, [
                    Button({
                        label: gettext('delete'),
                        style: {
                            fontSize: '12px',
                            borderRadius: '30px',
                            background: '#D85E33',
                            color: 'white'
                        },
                        onClick: () => {
                            this.deleteMap(index)
                        }
                    })
                ])
                // Button({
                //     label: this.state.testKey.key,
                //     style: {
                //         fontSize: '12px',
                //         borderRadius: '30px',
                //         background: '#D85E33',
                //         color: 'white'
                //     },
                //     onClick: () => {
                //         // 5. Modify the data in settingsStorage in the callback function of the event
                //         props.settingsStorage.setItem('testKey', { "key": "value" })
                //     }
                // })
            ])
    },
    // getStorage(props) {
    //     this.state.testKey = props.settingsStorage.getItem('testKey') || { "key": "0" }
    // },
    addMap(val) {
        this.state.maps = [...this.state.maps, val]
        this.saveMaps()
    },
    editMap(val, index) {
        this.state.maps[index] = val
        this.saveMaps()
    },
    deleteMap(index) {
        this.state.maps = this.state.maps.filter((_, ind) => {
            return ind !== index
        })
        this.saveMaps()
    },
    saveMaps() {
        const newString = JSON.stringify(this.state.maps)
        this.state.props.settingsStorage.setItem('maps', newString)
    },
    setState(props) {
        this.state.props = props
        if (props.settingsStorage.getItem('maps')) {
            this.state.maps = JSON.parse(props.settingsStorage.getItem('maps'))
        } else {
            this.state.maps = []
        }
        console.log('maps: ', this.state.maps)
    },
})