var staticContent = {
  index: function(req, res) {
    var quotations = [
                        { quote:  "Most modern calendars mar the sweet simplicity of our lives by reminding us that " +
                                  "each day that passes is the anniversary of some perfectly uninteresting event.",
                          cite:   "Oscar Wilde"
                        },
                        { quote:  "Most modern calendars mar the sweet simplicity of our lives by reminding us that " +
                                  "each day that passes is the anniversary of some perfectly uninteresting event.",
                          cite:   "Oscar Wilde"
                        },
                        { quote:  "Most modern calendars mar the sweet simplicity of our lives by reminding us that " +
                                  "each day that passes is the anniversary of some perfectly uninteresting event.",
                          cite:   "Oscar Wilde"
                        },
                        { quote:  "Most modern calendars mar the sweet simplicity of our lives by reminding us that " +
                                  "each day that passes is the anniversary of some perfectly uninteresting event.",
                          cite:   "Oscar Wilde"
                        }
                      ];

    res.render('home', quotations);
  },

  gallery: function(req, res) {
    imageSets = [
                 { displayName: 'Mohawks',  id: '72157633383072503' }, { displayName: 'Fades',    id: '72157633383072509'  },
                 { displayName: 'Caesars',  id: '72157633402512499' }, { displayName: 'Afro',     id: '72157633402115539'  },
                 { displayName: 'Custom 1', id: ''                  }, { displayName: 'Custom 2', id: ''                   }
                ];

    res.render('gallery', imageSets);
  }
}

exports.staticContent = staticContent;
