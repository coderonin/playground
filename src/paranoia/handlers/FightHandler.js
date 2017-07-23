class FightHandler{
    efficacy(attackerRoll, defenderRoll){
        return (attackerRoll - defenderRoll)/defenderRoll;
    }

    rollCombat(IAttackTypeCalculator, IDefenseTypeCalculator){
        let attackerRoll = IAttackTypeCalculator.getRoll(),
            defenderRoll = IDefenseTypeCalculator.getRoll(),
            efficacy = this.efficacy(attackerRoll, defenderRoll);

        if (efficacy > 0) {
            let baseDamage = IAttackTypeCalculator.getBaseDamage();
            IDefenseTypeCalculator.setDamage(baseDamage, efficacy);
        }
        return IDefenseTypeCalculator.getCombatResult();
    }
}

export default new FightHandler();
