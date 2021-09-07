<template>
    <div>
        <h2>Report</h2>  
        <label for="team">Select a team:</label>
        <select name="team" id="team">
            <option value="ProNext">ProNext</option>
            <option value="MMS-DP">MMS-DP</option>
            <option value="LMS">LMS</option>
        </select>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th></th>
                    <th>.NET</th>
                    <th>Java</th>
                    <th>.NET</th>
                    <th>Java</th>
                    <th>.NET</th>
                    <th>Java</th>
                    <th>.NET</th>
                    <th>Java</th>
                    <th>.NET</th>
                    <th>Java</th>
                    <th>.NET</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rajivranjan Singh</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>3/5</td>
                </tr>
                <tr>
                    <td>Aggregate</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>4/5</td>
                    <td>3/5</td>
                    <td>3/5</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },
    name: "Report",
    components: {
    }
}
</script>