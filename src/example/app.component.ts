import { Component } from '@angular/core'

@Component({
  selector: 'selectable-items-example',
  template: `
    <div class='container' style='margin-top: 25px;'>
      <h3>selectable-items example</h3>
      <br>
      <div class="example1">
        <selectable-items
          [selectableItems]='selectableItems'
          [selectableHeader]='"Selectable"'
          [selectedItems]='selectedItems'
          [selectedHeader]='"Selected"'
          [listHeight]='"150px"'
          (selectedChanged)="selectedChanged($event)">
        </selectable-items>
      </div>

      <br><br>

      <h3>hidden filters and batch buttons</h3>
      <br>
      <selectable-items
        [hideBatchButtons]="true"
        [hideFilters]="true"
        [selectableItems]='selectableItems'
        [selectableHeader]='"Selectable"'
        [selectedItems]='selectedItems'
        [selectedHeader]='"Selected"'
        [listHeight]='"150px"'
        (selectedChanged)="selectedChanged($event)">
      </selectable-items>
    </div>
  `
})
export class AppComponent {

  selectableItems

  selectedItems

  constructor () {
    // Prepared mock data
    this.selectableItems = [
      {
        displayName: 'Strawberry',
        refValue: {
          color: 'red',
          item: 'fruit',
          tasty: 'yep'
        }
      },
      {
        displayName: 'Bear',
        refValue: {
          item: 'animal'
        }
      },
      {
        displayName: 'Cactus',
        refValue: {
          color: 'green',
          item: 'plant',
          has: 'spikes'
        }
      },
      {
        displayName: 'Fire',
        refValue: {
          color: 'red',
          item: 'element'
        }
      },
      {
        displayName: 'Calle',
        refValue: {
          type: 'person'
        }
      }
    ]

    this.selectedItems = [
      {
        color: 'red',
        item: 'fruit',
        tasty: 'yep'
      },
      {
        color: 'green',
        item: 'plant',
        has: 'spikes'
      }
    ]
  }

  public selectedChanged($event) {
    console.log($event)
  }
}
