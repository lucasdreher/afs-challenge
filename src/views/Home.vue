<template>
  <div class="home">
    <button id="show-modal" @click="showModal = true">
      Add new security class
    </button>
    <h1>This is a table with some important data</h1>
    <b-table :data="tableData" :columns="columns"></b-table>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h2>New security class</h2>
        </template>
        <template #body>
          <form ref="newSecurityClassForm">
            <label for="securityClassName">Security class name</label>
            <input
              id="securityClassName"
              v-model="securityClassNameValue"
              placeholder="Name"
              type="text"
              required
            />

            <label for="nominalValue">Nominal Value</label>
            <input
              id="nominalValue"
              v-model="nominalValueValue"
              placeholder="Amount"
              type="number"
              required
            />

            <label for="authorizedAmount">Authorized amount</label>
            <input
              id="authorizedAmount"
              v-model="nominalValueValue"
              placeholder="Amount"
              type="number"
              required
            />

            <label for="issuedAmount">Issued amount</label>
            <input
              id="issuedAmount"
              v-model="nominalValueValue"
              placeholder="Amount"
              type="number"
              required
            />

            <label for="authorizedCapital">Authorized Capital</label>
            <input
              id="authorizedCapital"
              v-model="nominalValueValue"
              placeholder="Amount"
              type="number"
              required
            />

            <label for="issuedCapital">Issued capital</label>
            <input
              id="issuedCapital"
              v-model="nominalValueValue"
              placeholder="Amount"
              type="number"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TableData } from "@/types/types";
import Modal from "@/components/Modal.vue";

const //helper get totals
  getTotals = (data: TableData[]) => {
    const totalRow: any | TableData = {
      id: "42f246oo-49d0-4e91-8fe1-de2e656b0f06",
      name: "Total",
      nominalValue: 0,
      authorizedAmount: 0,
      issuedAmount: 0,
      authorizedCapital: 0,
      issuedCapital: 0,
      randomNumber: Math.random(),
    };

    data.forEach((row) => {
      for (let [key, value] of Object.entries(row)) {
        switch (key) {
          case "nominalValue":
            totalRow[key] += value;
            break;
          case "authorizedAmount":
            totalRow[key] += value;
            break;
          case "issuedAmount":
            totalRow[key] += value;
            break;
          case "authorizedCapital":
            totalRow[key] += value;
            break;
          case "issuedCapital":
            totalRow[key] += value;
            break;
        }
      }
    });
    return [...data, totalRow];
  };

@Component({
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
})
export default class Home extends Vue {
  tableData: TableData[] = [];
  columns = [
    {
      label: "Security class",
      field: "name",
    },
    {
      label: "Authorized amount",
      field: "authorizedAmount",
    },
    {
      label: "Issued amount",
      field: "issuedAmount",
    },
    {
      label: "Authorized Capital",
      field: "authorizedCapital",
    },
    {
      label: "Issued capital",
      field: "issuedCapital",
    },
  ];
  loading = false;

  // mounted works fine if your ide complains about it
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async mounted(): Promise<void> {
    const loading = (data: TableData[]) => {
      this.loading = true;
      return data.map((dataItem: TableData) => {
        return {
          ...dataItem,
          randomNumber: Math.random(),
        };
      });
    };
    const finishLoading = (data: TableData[]) => {
      this.loading = false;
      return getTotals(data);
    };

    try {
      const data: TableData[] = await this.getData();
      const loadedData: TableData[] = loading(data);
      this.tableData = finishLoading(loadedData);
    } catch (error) {
      console.error(error, "This is not good");
    }
  }

  async getData(): Promise<TableData[]> {
    return [
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series A",
        nominalValue: 5,
        authorizedAmount: 1500,
        issuedAmount: 500,
        authorizedCapital: 7550,
        issuedCapital: 2500,
      },
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series B",
        nominalValue: 10,
        authorizedAmount: 15000,
        issuedAmount: 5000,
        authorizedCapital: 150000,
        issuedCapital: 50000,
      },
      {
        id: "fd78c11b-e3d2-455a-99b0-49907a75c463",
        name: "Series C",
        nominalValue: 1,
        authorizedAmount: 96876,
        issuedAmount: 61760,
        authorizedCapital: 96876,
        issuedCapital: 61760,
      },
      {
        id: "d8654cb0-8986-4fbc-b969-025e514cb934",
        name: "Series D",
        nominalValue: 1,
        authorizedAmount: 10110,
        issuedAmount: 1100,
        authorizedCapital: 10110,
        issuedCapital: 1100,
      },
    ];
  }
}
</script>
