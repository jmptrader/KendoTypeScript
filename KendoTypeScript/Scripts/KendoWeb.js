///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />
var MyModule;
(function (MyModule) {
    var DropDownDemo = (function () {
        function DropDownDemo() {
            this.viewmodel = new DropDownViewModel.viewModel();

            var monthComboBox = $("#months").kendoDropDownList({
                dataTextField: "Description",
                dataValueField: "Id"
            });

            this.viewmodel.SelectedValue = 12;
            kendo.bind($("#example"), this.viewmodel);
        }
        return DropDownDemo;
    })();
    MyModule.DropDownDemo = DropDownDemo;
})(MyModule || (MyModule = {}));

$(document).ready(function () {
    var vm = new MyModule.DropDownDemo();
});
///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />
var Common;
(function (Common) {
    function GetProgramVersionDataSource(kendo) {
        // Change this to your specific port.
        var url = "http://localhost:57031/api/Values";
        var programVersionDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: url
                },
                dataType: "json",
                type: "GET"
            }
        });

        return programVersionDataSource;
    }
    Common.GetProgramVersionDataSource = GetProgramVersionDataSource;
})(Common || (Common = {}));
///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DropDownViewModel;
(function (DropDownViewModel) {
    var viewModel = (function (_super) {
        __extends(viewModel, _super);
        function viewModel() {
            _super.call(this);
            this.dropdownItems = Common.GetProgramVersionDataSource(kendo);
            this.SelectedValue = null;
        }
        return viewModel;
    })(kendo.Observable);
    DropDownViewModel.viewModel = viewModel;
})(DropDownViewModel || (DropDownViewModel = {}));
//# sourceMappingURL=KendoWeb.js.map
