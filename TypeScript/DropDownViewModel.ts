///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />

module DropDownViewModel {
    export class viewModel extends kendo.Observable {
        public dropdownItems: kendo.data.DataSource;
        public SelectedValue: number;

        constructor() {
            super();
            this.dropdownItems = Common.GetProgramVersionDataSource(kendo);
            this.SelectedValue = null;
        }


    }
}
