import { Component } from '@angular/core';

@Component({
    template: `
    <div class="example-wrapper container-fluid">
        <div class="row">
          <div class="col-xs-12 col-sm-6 example-col">
            <p>PanelBar</p>
            <kendo-panelbar>
              <kendo-panelbar-item title="Invasion Games">
                <kendo-panelbar-item title="Hockey"></kendo-panelbar-item>
                <kendo-panelbar-item title="Soccer"></kendo-panelbar-item>
                <kendo-panelbar-item title="Rugby"></kendo-panelbar-item>
                <kendo-panelbar-item title="Basketball"></kendo-panelbar-item>
                <kendo-panelbar-item title="Water polo"></kendo-panelbar-item>
                <kendo-panelbar-item title="Netball"></kendo-panelbar-item>
              </kendo-panelbar-item>
              <kendo-panelbar-item title="Striking & Fielding Games">
                <kendo-panelbar-item title="Cricket"></kendo-panelbar-item>
                <kendo-panelbar-item title="Softball"></kendo-panelbar-item>
                <kendo-panelbar-item title="Baseball"></kendo-panelbar-item>
              </kendo-panelbar-item>
              <kendo-panelbar-item title="Net & Court Games" [expanded]="true">
                <kendo-panelbar-item title="Badminton"></kendo-panelbar-item>
                <kendo-panelbar-item title="Squash"></kendo-panelbar-item>
                <kendo-panelbar-item title="Tennis" [selected]="true"></kendo-panelbar-item>
                <kendo-panelbar-item title="Table Tennis"></kendo-panelbar-item>
                <kendo-panelbar-item title="Volleyball"></kendo-panelbar-item>
              </kendo-panelbar-item>
              <kendo-panelbar-item title="Target Games">
                <kendo-panelbar-item title="Golf"></kendo-panelbar-item>
                <kendo-panelbar-item title="Lawn bowls"></kendo-panelbar-item>
                <kendo-panelbar-item title="Tenpin bowling"></kendo-panelbar-item>
              </kendo-panelbar-item>
            </kendo-panelbar>
          </div>
          <div class="col-xs-12 col-sm-6 example-col">
            <p>TabStrip</p>
            <kendo-tabstrip>
              <kendo-tabstrip-tab [title]="'Baseball'" [selected]="true">
                <ng-template kendoTabContent>
                  <p>
                    Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.
                  </p>
                  <p>
                    The batting team attempts to score runs by hitting a ball that is thrown by the pitcher with a bat swung by the batter,
                    then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when
                    a player advances around the bases and returns to home plate.
                  </p>
                </ng-template>
              </kendo-tabstrip-tab>
              <kendo-tabstrip-tab [title]="'Basketball'">
                <ng-template kendoTabContent>
                  <p>
                    Basketball is a sport that is played by two teams of five players on a rectangular court. The objective is to shoot
                    a ball through a hoop 18 inches (46 cm) in diameter and mounted at a height of 10 feet (3.048 m) to backboards at each
                    end of the court. The game was invented in 1891 by Dr. James Naismith, who would be the first basketball coach of the
                    Kansas Jayhawks, one of the most successful programs in the game's history.
                  </p>
                </ng-template>
              </kendo-tabstrip-tab>
              <kendo-tabstrip-tab [title]="'Football'">
                <ng-template kendoTabContent>
                  <p>
                    Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal.
                    Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional
                    context in which the word appears.
                  </p>
                </ng-template>
              </kendo-tabstrip-tab>
            </kendo-tabstrip>
          </div>
        </div>
      </div>
    `,
    styles: [`
        kendo-tabstrip p {
            margin: 0;
            padding: 8px;
        }
    `]
})
export class KendoLayoutComponent {
}
