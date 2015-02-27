///<reference  path="kendo.web.d.ts" />
///<reference path="jquery.d.ts"    />

module Common {
    export function GetProgramVersionDataSource(kendo) {
        // Change this to your specific port.
        var url = "http://localhost:57031/api/Values"; 
        var programVersionDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: url
                },
                dataType: "json",
                type: "GET",
            }
        }
            );

        return programVersionDataSource;
    }
}