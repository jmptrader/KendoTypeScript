///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />
var Common;
(function (Common) {
    function GetProgramVersionDataSource() {
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
//# sourceMappingURL=Common.js.map
