using Microsoft.EntityFrameworkCore.Migrations;

namespace Souqly_API.Migrations
{
    public partial class createnewtable3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NewPrice",
                table: "Carts");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Carts");

            migrationBuilder.AddColumn<float>(
                name: "NewPrice",
                table: "ProductCart",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "ProductCart",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NewPrice",
                table: "ProductCart");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "ProductCart");

            migrationBuilder.AddColumn<float>(
                name: "NewPrice",
                table: "Carts",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Carts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
