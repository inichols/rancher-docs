"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17225:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Upgrading and Rolling Back Kubernetes"},i=void 0,l={unversionedId:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",id:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",title:"Upgrading and Rolling Back Kubernetes",description:"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes.",source:"@site/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",permalink:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1685049914,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Upgrading and Rolling Back Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/getting-started/installation-and-upgrade/resources/local-system-charts"},next:{title:"Upgrading Kubernetes without Upgrading Rancher",permalink:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"}},s={},u=[{value:"Tested Kubernetes Versions",id:"tested-kubernetes-versions",level:2},{value:"How Upgrades Work",id:"how-upgrades-work",level:2},{value:"Recommended Best Practice for Upgrades",id:"recommended-best-practice-for-upgrades",level:2},{value:"Upgrading the Kubernetes Version",id:"upgrading-the-kubernetes-version",level:2},{value:"Rolling Back",id:"rolling-back",level:2},{value:"Configuring the Upgrade Strategy",id:"configuring-the-upgrade-strategy",level:2},{value:"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI",id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui",level:3},{value:"Enabling Draining Nodes During Upgrades from the Rancher UI",id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Configuring the Upgrade Strategy in the cluster.yml",id:"configuring-the-upgrade-strategy-in-the-clusteryml",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"})),(0,a.kt)("p",null,"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes."),(0,a.kt)("p",null,"Rancher calls RKE (Rancher Kubernetes Engine) as a library when provisioning and editing RKE clusters. For more information on configuring the upgrade strategy for RKE clusters, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE documentation"),"."),(0,a.kt)("h2",{id:"tested-kubernetes-versions"},"Tested Kubernetes Versions"),(0,a.kt)("p",null,"Before a new version of Rancher is released, it's tested with the latest minor versions of Kubernetes to ensure compatibility. For details on which versions of Kubernetes were tested on each Rancher version, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.6.0/"},"support maintenance terms.")),(0,a.kt)("h2",{id:"how-upgrades-work"},"How Upgrades Work"),(0,a.kt)("p",null,"RKE v1.1.0 changed the way that clusters are upgraded."),(0,a.kt)("p",null,"In this section of the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/how-upgrades-work"},"RKE documentation,")," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."),(0,a.kt)("h2",{id:"recommended-best-practice-for-upgrades"},"Recommended Best Practice for Upgrades"),(0,a.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,a.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,a.kt)("li",{parentName:"ol"},"If the upgrade fails, revert the cluster to the pre-upgrade Kubernetes version. This is achieved by selecting the ",(0,a.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version")," option. This will return your cluster to the pre-upgrade kubernetes version before restoring the etcd snapshot.")),(0,a.kt)("p",null,"The restore operation will work on a cluster that is not in a healthy or active state."),(0,a.kt)("h2",{id:"upgrading-the-kubernetes-version"},"Upgrading the Kubernetes Version"),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The options below are available for ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes clusters")," and ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#additional-features-for-registered-k3s-clusters"},"Registered K3s Kubernetes clusters"),"."),(0,a.kt)("li",{parentName:"ul"},"The following options also apply to imported RKE2 clusters that you have registered. If you import a cluster from an external cloud platform but don't register it, you won't be able to upgrade the Kubernetes version from Rancher."),(0,a.kt)("li",{parentName:"ul"},"Before upgrading Kubernetes, ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/backup-restore-and-disaster-recovery"},"back up your cluster.")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to upgrade and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Kubernetes Version")," drop-down, choose the version of Kubernetes that you want to use for the cluster."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Kubernetes begins upgrading for the cluster."),(0,a.kt)("h2",{id:"rolling-back"},"Rolling Back"),(0,a.kt)("p",null,"A cluster can be restored to a backup in which the previous Kubernetes version was used. For more information, refer to the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#how-snapshots-work"},"Backing up a cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup#restoring-a-cluster-from-a-snapshot"},"Restoring a cluster from backup"))),(0,a.kt)("h2",{id:"configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,a.kt)("p",null,"As of RKE v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade if certain ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability"},"conditions and requirements")," are met."),(0,a.kt)("p",null,"The upgrade strategy can be configured in the Rancher UI, or by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". More advanced options are available by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("h3",{id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui"},"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI"),(0,a.kt)("p",null,"From the Rancher UI, the maximum number of unavailable worker nodes can be configured. During a cluster upgrade, worker nodes will be upgraded in batches of this size."),(0,a.kt)("p",null,"By default, the maximum number of unavailable worker is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,a.kt)("p",null,"To change the default number or percentage of worker nodes,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to upgrade and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Upgrade Strategy")," tab, enter the ",(0,a.kt)("strong",{parentName:"li"},"Worker Concurrency")," as a fixed number or percentage. To get this number, you can take the number of nodes in your cluster and subtract the max unavailable nodes."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,a.kt)("h3",{id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui"},"Enabling Draining Nodes During Upgrades from the Rancher UI"),(0,a.kt)("p",null,"By default, RKE ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#manual-node-administration"},"cordons")," each node before upgrading it. ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"Draining")," is disabled during upgrades by default. If draining is enabled in the cluster configuration, RKE will both cordon and drain the node before it is upgraded."),(0,a.kt)("p",null,"To enable draining each node during a cluster upgrade,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to enable node draining and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Upgrade Strategy")," tab, go to the ",(0,a.kt)("strong",{parentName:"li"},"Drain nodes")," field and click ",(0,a.kt)("strong",{parentName:"li"},"Yes"),". Node draining is configured separately for control plane and worker nodes."),(0,a.kt)("li",{parentName:"ol"},"Configure the options for how pods are deleted. For more information about each option, refer to ",(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools#aggressive-and-safe-draining-options"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Optionally, configure a grace period. The grace period is the timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. Pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If this value is negative, the default value specified in the pod will be used."),(0,a.kt)("li",{parentName:"ol"},"Optionally, configure a timeout, which is the amount of time the drain should continue to wait before giving up."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As of Rancher v2.4.0, there is a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25478"},"known issue")," in which the Rancher UI doesn't show state of etcd and controlplane as drained, even though they are being drained.")),(0,a.kt)("h3",{id:"maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of RKE v1.1.0")),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability/"},"this section of the RKE documentation,")," you'll learn the requirements to prevent downtime for your applications when upgrading the cluster."),(0,a.kt)("h3",{id:"configuring-the-upgrade-strategy-in-the-clusteryml"},"Configuring the Upgrade Strategy in the cluster.yml"),(0,a.kt)("p",null,"More advanced upgrade strategy configuration options are available by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("p",null,"For details, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/configuring-strategy"},"Configuring the Upgrade Strategy")," in the RKE documentation. The section also includes an example ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," for configuring the upgrade strategy."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If a node doesn't come up after an upgrade, the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up")," command errors out."),(0,a.kt)("p",null,"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."),(0,a.kt)("p",null,"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."),(0,a.kt)("p",null,"A failed node could be in many different states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Powered off"),(0,a.kt)("li",{parentName:"ul"},"Unavailable"),(0,a.kt)("li",{parentName:"ul"},"User drains a node while upgrade is in process, so there are no kubelets on the node"),(0,a.kt)("li",{parentName:"ul"},"The upgrade itself failed")),(0,a.kt)("p",null,"If the max unavailable number of nodes is reached during an upgrade, Rancher user clusters will be stuck in updating state and not move forward with upgrading any other control plane nodes. It will continue to evaluate the set of unavailable nodes in case one of the nodes becomes available. If the node cannot be fixed, you must remove the node in order to continue the upgrade."))}p.isMDXComponent=!0}}]);