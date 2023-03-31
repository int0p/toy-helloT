<script>
    import List from "./List.svelte";
    import CreateList from "./CreateList.svelte"
</script>

<div class = "list-container">
    <div class = "lists">
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
    <CreateList/>
</div>

<style lang="scss">
  .list-container{
    box-sizing: border-box;
    width: 100vw;
    height: calc(100vh - 40px); //header 높이 만큼 빼줘야함.
    padding: 30px;
    border: 8px solid red;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;

    .lists{
      box-sizing: border-box;
      display: inline-block;
      height: 100%;
      border: 10px solid blue;
      white-space: nowrap;
    }
  }
</style>