Vue.component("task", {
  props: ["title", 'counter'],

  data() {
    return {};
  },

  template: `
    <div>
      <h3> {{title}} </h3>
      <p>счетчик {{counter}}</p>
      <button @click="$parent.counter++" >+1</button>      
    </div>    
    
    `,
});

