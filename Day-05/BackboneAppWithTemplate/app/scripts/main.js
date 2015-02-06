/*global BackboneAppWithTemplate, $*/


window.BackboneAppWithTemplate = {
    Models: {
        SalaryCalculator : Backbone.Model.extend({
            defaults : {
                basic : 0,
                hra : 0,
                da : 0,
                tax :0,
                salary : 0
            },
            calculate : function(){
                var net = this.get("basic") + this.get("hra") + this.get("da");
                var gross = net* ((100-this.get("tax"))/100);
                this.set("salary", gross);
            }
        })
    },
    Collections: {},
    Views: {
        SalaryCalculatorView : Backbone.View.extend({
            templateId : "#calculatorTemplate",
            events : {
                "change input" : "updateModel",
                "click #btnCalculate" : "triggerCalculate"
            },
            triggerCalculate : function(){
                this.model.calculate();
            },
            updateModel : function(){
                this.model.set("basic", parseInt(this.$("#txtBasic").val(),10));
                this.model.set("hra", parseInt(this.$("#txtHra").val(),10));
                this.model.set("da", parseInt(this.$("#txtDa").val(),10));
                this.model.set("tax", parseInt(this.$("#rangeTax").val(),10));
            },
            initialize : function(){
                var self = this;
                this.model.on("change", this.render);
            },
            render : function(){
                this.templateFn = Handlebars.compile($(this.templateId).html());
                this.$el.html(this.templateFn(this.model.attributes));
                console.log(this.templateId);
            }
        })
    },
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    BackboneAppWithTemplate.init();
});
