<template>
  <div class="transfers">
    <h1 class="title is-1">Transfers</h1>
    <label
      >Search
      <input v-model="searchTerms" />
    </label>
    <div>
      <button class="edit-btn btn btn-primary" @click="updateTransfers">
        Update transfers
      </button>
      <div class="transfers-container">
        <transfer-row
          :key="transfer.transactionIdentifier"
          v-for="transfer in searchedTransfers"
          :transfer="transfer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Transaction } from "@/types/types";
import TransferRow from "@/components/transferRow.vue";
import transfers from "@/assets/data";
@Component({
  name: "Transfers",
  components: { TransferRow },
})
export default class Transfers extends Vue {
  searchTerms = "";
  transfers = transfers;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get searchedTransfers() {
    if (this.searchTerms) {
      // custom search, should be improved upon
      const searchArray: Transaction[] = [];
      this.transfers.forEach((transfer: Transaction) => {
        if (
          transfer.recordDate
            .toLowerCase()
            .includes(this.searchTerms.toLowerCase())
        ) {
          searchArray.push(transfer);
        }
      });
      return searchArray;
    }
    return this.transfers;
  }

  updateTransfers(): void {
    this.transfers[0] = {
      splitFactor: null,
      exDate: null,
      amount: 10000,
      companyId: "568fa387-43d1-499a-bba2-25089f5a881a",
      notes: null,
      pricePerShare: null,
      recordDate: "2021-07-01",
      securityClassId: "ab983cfe-a932-4e25-98ea-f5928a839fe1",
      securityClass: { name: "Common" },
      state: "OLD",
      fromSecurityHolderId: "dd971e7f-386b-45dd-93e1-666fbeed0a55",
      fromSecurityHolder: "From Security Holder",
      toSecurityHolderId: "dd971e7f-386b-45dd-93e1-666fbeed0a55",
      toSecurityHolder: {
        fullName: "Jeff Dunlap",
        type: "PERSON",
      },
      transactionIdentifier: "41095fdb-6b52-4257-aef8-dc523d782e53",
      positionWithinDay: 3,
      type: "ISSUE_STOCK",
    };

    this.transfers = this.transfers.map((transfer: Transaction) => {
      const number = `Important data: ${(Math.random() * 100000000)
        .toString()
        .slice(1, 8)}`;
      return {
        ...transfer,
        forgottenProperty: number,
      };
    });
  }
}
</script>
<style scoped lang="scss">
.edit-btn {
  margin: 2rem;
}

.transfers-container {
  padding: 1rem 0;
  background-color: #535a74;
  min-height: 71vh;
}
</style>
