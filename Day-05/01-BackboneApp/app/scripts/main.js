/*global BackboneApp, $*/



window.BackboneApp = {
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
            el : "#calculator1",
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
                this.model.on("change", function(){
                    self.$("#txtBasic").val(self.model.get("basic"));
                    self.$("#txtHra").val(self.model.get("hra"));
                    self.$("#txtDa").val(self.model.get("da"));
                    self.$("#rangeTax").val(self.model.get("tax"));
                    self.$("#spanTax").html(self.model.get("tax") + "%");
                    //self.$("#divResult").html(self.model.get("salary"));
                    self.$el.find("#divResult").html(self.model.get("salary"));
                });
            }
        })
    },
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var calculator = new BackboneApp.Models.SalaryCalculator();
        var view = new BackboneApp.Views.SalaryCalculatorView({
            model : calculator
        });
        
    }
};

$(document).ready(function () {
    'use strict';
    BackboneApp.init();
});
