using Microsoft.EntityFrameworkCore.Migrations;

namespace Souqly_API.Migrations
{
    public partial class createnew_table6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StockIn",
                table: "OrderDetails");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "OrderDetails",
                newName: "TotalOptionPrice");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TotalOptionPrice",
                table: "OrderDetails",
                newName: "price");

            migrationBuilder.AddColumn<int>(
                name: "StockIn",
                table: "OrderDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
