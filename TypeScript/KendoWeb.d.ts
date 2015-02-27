/// <reference path="kendo.web.d.ts" />
/// <reference path="jquery.d.ts" />
declare module MyModule {
    class DropDownDemo {
        public viewmodel: DropDownViewModel.viewModel;
        constructor();
    }
}
declare module Common {
    function GetProgramVersionDataSource(kendo: any): any;
}
declare module DropDownViewModel {
    class viewModel extends kendo.Observable {
        public dropdownItems: kendo.data.DataSource;
        public SelectedValue: number;
        constructor();
    }
}
