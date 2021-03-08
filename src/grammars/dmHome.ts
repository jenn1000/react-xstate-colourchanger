export const grammar = `
<grammar root="start">
    <rule_id="start">
        <one-of>
            <item>please
                <ruleref uri="#combine"/>
                <tag>out.combine=Object();
                out.combine.object=rules.combine.object;
                out.combine.do=rules.combine.type;</tag> </item>

            <item>
                <ruleref uri="#combine"/>
                <tag>out.combine=Object();
                out.combine.object=rules.combine.object;
                out.combine.do=rules.combine.type;</tag> </item> </one-of>
    </rule>

    <rule id="object_1">
        <one-of>
            <item>light</item>
            <item>heat</item>
            <item>A C<tag>out="air conditioning";</tag></item>
            <item>air conditioning;</tag></item>
        </one-of>
    </rule>

    <rule id="object_2">
        <one-of>
            <item>window</item>
            <item>door</item>
        </one-of>
    </rule>

    <rule_id="action_1">
        <one-of>
            <item>on</item>
            <item>off</item>
        </one-of>
    </rule>

    <rule_id="action_2">
        <one-of>
            <item>open</item>
            <item>close</item>
        </one-of>
    </rule>

    <rule_id="combine">
        <one-of>
            <item>turn
                <ruleref uri="#action_1"/>
                the
                <ruleref uri="#object_1"/>
                <tag>out.object=rules.object_1;
                out.type=rules.action_1;</tag></item>

            <item>turn the
                <ruleref uri="#object_1"/>
                <ruleref uri="#action_1"/>
                <tag>out.object=rules.object_1;
                out.type=rules.action_1;</tag></item>  
    
            <item>
                <ruleref uri="#action_2"/>
                the
                <ruleref uri="#object_2"/>
                <tag>out.object=rules.object_2;
                out.type=rules.action_2;</tag></item>
        </one-of>
    </rule>
</grammar>
`