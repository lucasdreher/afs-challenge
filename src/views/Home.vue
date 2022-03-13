<template>
  <div class="home">
    <!-- button call modal form -->
    <button id="show-modal" class="btn btn-primary" @click="showModal = true">
      Add new security class
    </button>

    <!-- modal form -->
    <modal :show="showModal" :reset="formReset" @close="showModal = false">
      <template #header>
        <h2>New security class</h2>
      </template>
      <template #body>
        <form id="addSecurityClassName" @submit.prevent="addSecurityClassName">
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
            v-model="authorizedAmountValue"
            placeholder="Amount"
            type="number"
            required
          />

          <label for="issuedAmount">Issued amount</label>
          <input
            id="issuedAmount"
            v-model="issuedAmountValue"
            placeholder="Amount"
            type="number"
            required
          />

          <label for="authorizedCapital">Authorized Capital</label>
          <input
            id="authorizedCapital"
            v-model="authorizedCapitalValue"
            placeholder="Amount"
            type="number"
            required
          />

          <label for="issuedCapital">Issued capital</label>
          <input
            id="issuedCapital"
            v-model="issuedCapitalValue"
            placeholder="Amount"
            type="number"
            required
          />
        </form>
      </template>
      <template #footer>
        <button
          class="btn btn-primary"
          type="submit"
          form="addSecurityClassName"
        >
          Submit
        </button>
        <button class="btn btn-primary-ghost" @click="formReset">Cancel</button>
      </template>
    </modal>

    <h1>This is a table with some important data</h1>
    <b-table :data="tableData" :columns="columns"></b-table>
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
            totalRow[key] += parseInt(value);
            break;
          case "authorizedAmount":
            totalRow[key] += parseInt(value);
            break;
          case "issuedAmount":
            totalRow[key] += parseInt(value);
            break;
          case "authorizedCapital":
            totalRow[key] += parseInt(value);
            break;
          case "issuedCapital":
            totalRow[key] += parseInt(value);
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
      securityClassNameValue: "",
      nominalValueValue: null,
      authorizedAmountValue: null,
      issuedAmountValue: null,
      authorizedCapitalValue: null,
      issuedCapitalValue: null,
    };
  },
  methods: {
    formReset() {
      this.securityClassNameValue = "";
      this.nominalValueValue = null;
      this.authorizedAmountValue = null;
      this.issuedAmountValue = null;
      this.authorizedCapitalValue = null;
      this.issuedCapitalValue = null;
      this.showModal = false;
    },
    addSecurityClassName() {
      if (
        !this.securityClassNameValue ||
        !this.nominalValueValue ||
        !this.authorizedAmountValue ||
        !this.issuedAmountValue ||
        !this.authorizedCapitalValue ||
        !this.issuedCapitalValue
      ) {
        console.log("missing input");
        return;
      }

      const newSecurityClass: TableData = {
        id: "fd78c11b-e3d2-455a-99b0-49907a75c463",
        name: this.securityClassNameValue,
        nominalValue: 1,
        authorizedAmount: this.authorizedAmountValue,
        issuedAmount: this.issuedAmountValue,
        authorizedCapital: this.authorizedCapitalValue,
        issuedCapital: this.issuedCapitalValue,
        randomNumber: Math.random(),
      };

      this.tableData.splice(this.tableData.length - 1, 1, newSecurityClass);
      this.tableData = getTotals(this.tableData);

      this.formReset();
    },
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
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f04",
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

<style scoped lang="scss">
h1 {
  margin: 1rem auto 0.5rem;
}

.modal-container {
  form {
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 0.6rem;
  }

  label {
    text-align: left;
  }

  input {
    width: 100%;
  }

  .btn-primary {
    margin-right: 0.5rem;
  }
}
</style>