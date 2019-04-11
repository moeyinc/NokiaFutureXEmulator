<template>
  <section>
    <h2>Message Log</h2>
    <VDataTable
      :headers="headers"
      :items="items"
      :pagenation.sync="pagenation"
      :hide-actions="true"
      class="elevation-1 datatable"
    >
      <template
        v-slot:items="props"
        class="table-data"
      >
        <tr>
          <td>
            {{ props.item.messageSender }}
          </td>
          <td>
            {{ props.item.topic }}
          </td>
          <td>
            {{ props.item.messageType }}
          </td>
          <td>
            {{ props.item.receivedAt }}
          </td>
        </tr>
      </template>
    </VDataTable>
  </section>
</template>

<script>
export default {
  props: {
    messageLog: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Sender',
          value: 'sender',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Topic',
          value: 'topic',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Type',
          value: 'type',
          sortable: false,
          align: 'left',
        },
        {
          text: 'Received at',
          value: 'receivedAt',
          sortable: false,
          align: 'left',
        },
      ],
      items: [],
      pagenation: {
        rowsPerPage: -1,
      },
    };
  },
  watch: {
    messageLog(newVal) {
      const newLog = this.messageLog[this.messageLog.length - 1];
      console.log('newLog', newLog);
      // let messageParam1;
      // for (const key in newLog.message) {
      //   if (key !== 'type' && key !== 'sender') {
      //     messageParam1 = newLog.message[key];
      //   }
      // }
      const item = {
        messageSender: newLog.message.sender,
        topic: newLog.topic,
        messageType: newLog.message.type,
        receivedAt: newLog.receivedAt,
      };
      this.items.push(item);
    },
  },
};
</script>

<style scoped lang="stylus">
h2
  font-size: 18px
  font-family: 'NokiaPureHeadline_Regular'
  margin-bottom: 20px
</style>
