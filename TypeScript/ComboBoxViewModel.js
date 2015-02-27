///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ComboBoxViewModel;
(function (ComboBoxViewModel) {
    var viewModel = (function (_super) {
        __extends(viewModel, _super);
        function viewModel() {
            _super.call(this);
            this.comboBoxItems = Common.GetProgramVersionDataSource();
        }
        viewModel.prototype.DropDownChange = function (e) {
            alert("Selected Text: " + this.SelectedText + "   Selected Value: " + this.SelectedValue);
        };
        return viewModel;
    })(kendo.Observable);
    ComboBoxViewModel.viewModel = viewModel;
})(ComboBoxViewModel || (ComboBoxViewModel = {}));
//# sourceMappingURL=ComboBoxViewModel.js.map
