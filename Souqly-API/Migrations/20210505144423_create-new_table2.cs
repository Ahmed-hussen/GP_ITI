using Microsoft.EntityFrameworkCore.Migrations;

namespace Souqly_API.Migrations
{
    public partial class createnew_table2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_AspNetUsers_MarkitingId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_MarkitingId",
                table: "Carts");

            migrationBuilder.DropColumn(
                name: "MarkitingId",
                table: "Carts");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_MarketingId",
                table: "Carts",
                column: "MarketingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_AspNetUsers_MarketingId",
                table: "Carts",
                column: "MarketingId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_AspNetUsers_MarketingId",
                table: "Carts");

            migrationBuilder.DropIndex(
                name: "IX_Carts_MarketingId",
                table: "Carts");

            migrationBuilder.AddColumn<int>(
                name: "MarkitingId",
                table: "Carts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Carts_MarkitingId",
                table: "Carts",
                column: "MarkitingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_AspNetUsers_MarkitingId",
                table: "Carts",
                column: "MarkitingId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
