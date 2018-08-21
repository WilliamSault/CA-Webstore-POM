var properties = require('./Properties.js');

class Field {
    constructor(elements)
    {
        this.elements = elements;
    }

    isEmpty(next,data){
        if (data != properties.EMPTY) {
          next(this);
        }
    }
}

class TextField extends Field {
    constructor(element){
        super(element);
    }

    sendKeys(text){
        super.isEmpty(function(field) {
            field.elements.sendKeys(text)            
        },text);
    }
}
class Button extends Field{
    constructor(element) {
        super(element)
    }

    click(data){
        super.isEmpty(function(field) {
            field.elements.click()            
        },data);
    }
}

class CombBoxField extends Field{
    constructor(element){
        super(element)
    }

    select(item){
        super.isEmpty(function() {
            element(by.cssContainingText('option', item)).click()            
        },item);
    }
}

module.exports = {
    Button: Button,
    TextField: TextField,
    CombBoxField: CombBoxField
  }
