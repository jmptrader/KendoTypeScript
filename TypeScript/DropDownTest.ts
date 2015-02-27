///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />

module MyModule {
    export class DropDownDemo {
        public viewmodel: DropDownViewModel.viewModel;
        
        constructor() {

            this.viewmodel = new DropDownViewModel.viewModel();

            var monthComboBox = $("#months").kendoDropDownList({
                dataTextField: "Description",
                dataValueField: "Id",
            });

            this.viewmodel.SelectedValue = 12;
            kendo.bind($("#example"), this.viewmodel);
            
         }
    }

}

$(document).ready(function () {
    var vm = new MyModule.DropDownDemo();
});



