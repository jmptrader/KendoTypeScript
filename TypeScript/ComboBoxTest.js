///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />

var MyModule;
(function (MyModule) {
    var ComboBoxDemo = (function () {
        function ComboBoxDemo() {
            this.viewmodel = new ComboBoxViewModel.viewModel();

            $("#products").kendoDropDownList({
                dataTextField: "Description",
                dataValueField: "Id",
                databind: this.viewmodel,
                dataSource: this.viewmodel.comboBoxItems,
                text: this.viewmodel.SelectedText,
                value: this.viewmodel.SelectedValue,
                selected: this.viewmodel.DropDownChange
            });
        }
        return ComboBoxDemo;
    })();
    MyModule.ComboBoxDemo = ComboBoxDemo;
})(MyModule || (MyModule = {}));

$(document).ready(function () {
    var vm = new MyModule.ComboBoxDemo();
});
//# sourceMappingURL=ComboBoxTest.js.map
